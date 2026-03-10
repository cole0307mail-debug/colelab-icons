// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TagOutlinedSvg from '@colelab/icons-svg/es/asn/TagOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TagOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TagOutlinedSvg }, slots);
  },
});
