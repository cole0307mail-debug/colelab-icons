// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ProjectOutlinedSvg from '@colelab/icons-svg/es/asn/ProjectOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ProjectOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ProjectOutlinedSvg }, slots);
  },
});
