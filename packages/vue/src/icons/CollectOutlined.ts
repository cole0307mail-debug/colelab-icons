// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CollectOutlinedSvg from '@colelab/icons-svg/es/asn/CollectOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CollectOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CollectOutlinedSvg }, slots);
  },
});
